package org.hoo;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Features\\Login.Feature", 
               glue={""}, snippets = SnippetType.UNDERSCORE ,
               plugin= {"pretty","html:src\\test\\resources\\Features"},tags= {"@smoke"})
public class TestRunner {
	

}
