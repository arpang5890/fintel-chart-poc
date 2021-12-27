package com.baeldung.springbootreact.controller;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import org.apache.commons.io.IOUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/optionflow")
public class OptionFlowController {
	@GetMapping
	public String getData() throws IOException {
		InputStream is = getClass().getClassLoader().getResourceAsStream("optionFlows.json");
		return IOUtils.toString(is, StandardCharsets.UTF_8);
	}
}
