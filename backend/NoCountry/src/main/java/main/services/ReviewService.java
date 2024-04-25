package main.services;

import main.dtos.ReviewDTO;
import main.models.Review;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface ReviewService {
    List<Review> getAllReviews() throws Exception;
    Review getReviewById(Long id) throws Exception;
    ReviewDTO saveReview(ReviewDTO reviewDTO) throws Exception;

    void deleteReview(Long id) throws Exception;
}

