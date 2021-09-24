Feature: Verfying Adactin details 

@smoke 
Scenario: verifying the Login Functionality 
Given  user is on the adactin page 
When user should enter username and password 
Then user should verify succues method 

@sanity, @smoke
Scenario: verfying signup functionaliy
Given user is the adactin page 
When user should enter firstname  and lastname and password and confirm password 
Then user should verify success message

@sanity 

Scenario: verifying forget functionality 
Given user is on the adactin page 
When user should click forget password btn end user  re-enter the password 
Then User should verify login fuctionality again