package main.services;

import main.models.Review;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface ReviewService {
    List<Review> getAllReviews();
    Review getReviewById(Long id);
    Review saveReview(Review review);
    void deleteReview(Long id);
}

