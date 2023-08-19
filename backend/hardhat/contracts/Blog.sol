//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Blog {
    // owner
    address public owner;
    uint public postCounter;
    uint public activePostCounter;
    // Deleted Posts
    mapping(uint => bool) postExists;

    enum Deactivated {
        NAH, YAP
    }

    struct blogStruct{
        uint id;
        string title;
        string description;
        Deactivated deleted;
        uint created;
        uint updated;
    }

    blogStruct[] activePosts;

    event Action(
        uint id,
        string actionType,
        address indexed executor,
        uint timestamp
        );
    
    modifier ownerOnly() {
        require(msg.sender == owner, "Oops, you are not the owner");
        _;
    }
    constructor() {
        owner = msg.sender;
    }

    function createPost(string memory _title, string memory _description) public returns (bool){
        require(bytes(_title).length > 0, "Title cannot be Empty");
        require(bytes(_description).length > 0, "Description cannot be Empty");

        postCounter++;
        activePostCounter++;
        postExists[postCounter] = true;
        activePosts.push(
            blogStruct(
                postCounter,
                _title,
                _description,
                Deactivated.NAH,
                block.timestamp,
                block.timestamp
            )
        );
        emit Action(
            postCounter,
            "POST CREATED",
            msg.sender,
            block.timestamp
        );
        return true;        
    }

    function updatePost(uint _id, string memory _title, string memory _description) public returns (bool){
        require(postExists[_id], "Aaai, that post doesn't Exist, man");
        require(bytes(_title).length > 0, "Title cannot be Empty");
        require(bytes(_description).length > 0, "Description cannot be Empty");

        activePosts[_id - 1].title = _title;
        activePosts[_id - 1].description = _description;
        activePosts[_id - 1].updated = block.timestamp;


        emit Action(
            _id,
            "POST UPDATED",
            msg.sender,
            block.timestamp
        );
        return true;        
    }

    function showPost(uint _id) public view returns (blogStruct memory) {
        return activePosts[_id - 1];
    }

    function getAllPosts() public view returns (blogStruct[] memory) {
        return activePosts;
    }

    function deletePost(uint _id) public ownerOnly returns (bool){
        require(postExists[_id], "Aaai, that post doesn't Exist, man");

        activePosts[_id - 1].deleted = Deactivated.YAP;
        activePostCounter--;


        emit Action(
            _id,
            "POST DELETED",
            msg.sender,
            block.timestamp
        );
        return true;        
    }
    // Restore a certain deleted post
    function restorePost(uint _id) public ownerOnly returns (bool){
        require(postExists[_id], "Aaai, that post doesn't Exist, man");

        activePosts[_id - 1].deleted = Deactivated.NAH;
        activePostCounter++;


        emit Action(
            _id,
            "POST RESTORED",
            msg.sender,
            block.timestamp
        );
        return true;        
    }
    
    // get all active posts
    function getActivePosts() public view returns (blogStruct[] memory) {
    blogStruct[] memory activePostsTemp = new blogStruct[](postCounter);
    uint index = 0;

    for (uint i = 0; i < activePosts.length; i++) {
        if (activePosts[i].deleted == Deactivated.NAH) {
            activePostsTemp[index] = activePosts[i];
            index++;
        }
    }

    return activePostsTemp;
    }

    // get all deleted posts
    function getDeletedPosts() public view returns (blogStruct[] memory) {
    blogStruct[] memory deletedPostsTemp = new blogStruct[](postCounter - activePostCounter);
    uint index = 0;

    for (uint i = 0; i < postCounter; i++) {
        if (activePosts[i].deleted == Deactivated.YAP) {
            deletedPostsTemp[index] = activePosts[i];
            index++;
        }
    }

    return deletedPostsTemp;
}
}
