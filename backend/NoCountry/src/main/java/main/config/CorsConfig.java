package main.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("*"); // Allows all origins.
        config.addAllowedMethod("*"); // Allows all HTTP methods (GET, POST, etc.)
        config.addAllowedHeader("*"); // Allows all headers.
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }


}
