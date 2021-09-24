package org.hook;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefination {

@Given("user is on the adactin page")
public void user_is_on_the_adactin_page() {
   System.out.println("lanuch"); 
   System.out.println("hello");
}

@When("user should enter username and password")
public void user_should_enter_username_and_password() {
	System.out.println("username and password ");
    }

@Then("user should verify succues method")
public void user_should_verify_succues_method() {
    System.out.println("FirstName and LastName");
}

@Given("user is the adactin page")
public void user_is_the_adactin_page() {
   System.out.println("user is the adactin page");
}

@When("user should enter firstname  and lastname and password and confirm password")
public void user_should_enter_firstname_and_lastname_and_password_and_confirm_password() {
    System.out.println("FirstName and LastName");
}

@Then("user should verify success message")
public void user_should_verify_success_message() {
    System.out.println("login");
}

@When("user should click forget password btn end user  re-enter the password")
public void user_should_click_forget_password_btn_end_user_re_enter_the_password() {
    System.out.println("FirstName and LastName");
}

@Then("User should verify login fuctionality again")
public void user_should_verify_login_fuctionality_again() {
	System.out.println("login");
    }



}
