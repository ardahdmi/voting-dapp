//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

struct User {
    string nickname;
    address userAddress;
    bool isVoter;
    bool isQuestioner;
    bool isApproved;
}

struct Vote {
    address voterAddress;
    address quizAddress;
    string[] questions;
    string[] choices;
}

struct Quiz {
    string title;
    address ownerAddress;
    string[] questions;
    string[][] answers;
    bool exists;
    bool isOpen;
}
