package com.bookstore.onlinebookstore.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import com.bookstore.onlinebookstore.entity.Book;

@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer{
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {

		config.exposeIdsFor(Book.class);
	}

}
