//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
// pragma experimental ABIEncoderV2;
import "../structs/Poll.struct.sol";
import "hardhat/console.sol";

contract Poll {
    // User(nickname, userAddress, isVoter, isQuestioner, isApproved)
    // Quiz(title, ownerAddress, s[] questions, m(s=>s[]) answers, bool exists, bool isOpen)
    // Vote(vAddress, qAddress, questions, s[] choices)

    event NewUser(address indexed user, uint256 date, string message);

    address public immutable OWNER;

    address[] quizList;
    mapping(address => Quiz) quizes;
    address[] userList;
    mapping(address => User) users;
    mapping(address => mapping(address => bool)) hasVoted;
    mapping(address => uint256) voteAmounts;
    mapping(address => Vote[]) votes;

    constructor() {
        OWNER = msg.sender;
    }

    function addUser(
        string memory _nickname,
        address _userAddress,
        bool _isVoter,
        bool _isQuestioner
    ) public suitableToRegister(_nickname) {
        // ayni isimle olmaz
        users[_userAddress] = User(
            _nickname,
            _userAddress,
            _isVoter,
            _isQuestioner,
            true
        );
        userList.push(_userAddress);
        emit NewUser(
            _userAddress,
            block.timestamp,
            "User successfully created."
        );
    }

    function getAllUsers() public view returns (User[] memory) {
        User[] memory _userList = new User[](userList.length);
        for (uint256 i = 0; i < userList.length; i++) {
            _userList[i] = users[userList[i]];
        }
        return _userList;
    }

    function addQuiz(
        string memory _title,
        string[] memory _questions,
        string[][] memory _answers
    ) public isApproved {
        require(
            users[msg.sender].isQuestioner == true,
            "This user is not suitable to create a quiz."
        );
        // check whether user has quiz

        quizes[msg.sender] = Quiz(
            _title,
            msg.sender,
            _questions,
            _answers,
            true,
            true
        );
        // quizes[msg.sender].votes
        quizList.push(msg.sender);
    }

    function getAllQuizes() public view returns (Quiz[] memory) {
        Quiz[] memory _quizList = new Quiz[](quizList.length);
        for (uint256 i = 0; i < quizList.length; i++) {
            if (quizes[quizList[i]].exists == true) {
                _quizList[i] = quizes[quizList[i]];
            }
        }
        return _quizList;
    }

    function changeUserRole(
        string memory _nickname,
        bool _isVoter,
        bool _isQuestioner
    ) public isApproved {
        require(
            ifStrsEqual(users[msg.sender].nickname, _nickname) == true,
            "Nicknames do not match."
        );
        users[msg.sender].isVoter = _isVoter;
        users[msg.sender].isQuestioner = _isQuestioner;
    }

    function vote(Vote memory _vote) public isApproved suitableToVote(_vote) {
        // vote
        votes[_vote.quizAddress].push(_vote);
        voteAmounts[_vote.quizAddress] += 1;
        hasVoted[_vote.voterAddress][_vote.quizAddress] = true;
        // emit
    }

    function endQuizWithResults() public isApproved returns (Vote[] memory) {
        require(quizes[msg.sender].exists == true, "User doesn't own a quiz.");
        quizes[msg.sender].isOpen = false;
        // emit

        return getVotesForQuiz(msg.sender);
    }

    function getVotesForQuiz(address _quizAddress)
        private
        view
        returns (Vote[] memory)
    {
        Vote[] memory votesTemp = votes[_quizAddress];
        return votesTemp;
    }

    function ifStrsEqual(string memory tFirst, string memory tSecond)
        private
        pure
        returns (bool)
    {
        return
            keccak256(abi.encodePacked(tFirst)) ==
            keccak256(abi.encodePacked(tSecond));
    }

    function isNewUser(address _address) public view returns (bool) {
        return users[_address].userAddress == address(0x0);
    }

    modifier suitableToRegister(string memory _nickname) {
        require(bytes(_nickname).length > 0, "Please specify a nickname.");
        require(
            bytes(_nickname).length >= 3 && bytes(_nickname).length <= 15,
            "A valid nickname should have 3-15 characters."
        );
        _;
    }

    modifier suitableToVote(Vote memory _vote) {
        require(
            users[_vote.voterAddress].isVoter == true,
            "User is not a voter."
        );
        require(
            hasVoted[_vote.voterAddress][_vote.quizAddress] == false,
            "User has already voted."
        );
        require(
            _vote.voterAddress != _vote.quizAddress,
            "Quiz owner can't vote."
        );
        require(
            quizes[_vote.quizAddress].isOpen == true,
            "The poll has been closed."
        );
        _;
    }
    modifier isApproved() {
        require(users[msg.sender].isApproved, "You are not registered.");
        _;
    }
}

// "title",["question"],[["answer","answer"]]
// "arda",true,true
// ["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", ["question"], ["answer"] ]
