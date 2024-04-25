package main.mappers;

import main.dtos.ReviewDTO;
import main.models.Review;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReviewMapper {

    ReviewDTO reviewToReviewDTO(Review review);
    Review reviewDTOToReview(ReviewDTO reviewDTO);
}
