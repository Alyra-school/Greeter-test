// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract greeter { 
    string greeting; 
    
    constructor(string memory _greeting) public { 
        greeting = _greeting; 
    } 
    
    function greet() view public returns (string memory) { 
        return greeting; 
    } 
}