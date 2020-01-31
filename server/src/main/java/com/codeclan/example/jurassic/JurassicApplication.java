package com.codeclan.example.jurassic;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class JurassicApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(JurassicApplication.class, args);
	}

}
