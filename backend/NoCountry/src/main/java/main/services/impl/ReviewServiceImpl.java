package main.services.impl;

import main.dtos.ReviewDTO;
import main.mappers.ReviewMapper;
import main.models.Review;
import main.repository.ReviewRepository;
import main.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private  ReviewRepository reviewRepository;

    @Autowired
    private ReviewMapper reviewMapper;


    @Override
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    @Override
    public Review getReviewById(Long id) {
        return reviewRepository.findById(id).orElse(null);
    }

    @Override
    public ReviewDTO saveReview(ReviewDTO reviewDTO) {
        Review review = reviewMapper.reviewDTOToReview(reviewDTO);
        Review savedReview = reviewRepository.save(review);
        return reviewMapper.reviewToReviewDTO(savedReview);
    }

    @Override
    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}
