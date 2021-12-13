package com.baeldung.springbootreact.controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

import org.apache.commons.io.IOUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/data")
public class DataController {
	@GetMapping
    public String getData() throws IOException {
		InputStream is = getClass().getClassLoader().getResourceAsStream("bar.json");
		String result = IOUtils.toString(is, StandardCharsets.UTF_8);
    	
        return result;
    }
}
