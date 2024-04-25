package main.mappers;

import javax.annotation.processing.Generated;
import main.dtos.ReviewDTO;
import main.models.Review;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-04-25T15:52:19-0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.10 (Oracle Corporation)"
)
@Component
public class ReviewMapperImpl implements ReviewMapper {

    @Override
    public ReviewDTO reviewToReviewDTO(Review review) {
        if ( review == null ) {
            return null;
        }

        String reviewComment = null;
        Integer valoration = null;

        reviewComment = review.getReviewComment();
        valoration = review.getValoration();

        ReviewDTO reviewDTO = new ReviewDTO( reviewComment, valoration );

        return reviewDTO;
    }

    @Override
    public Review reviewDTOToReview(ReviewDTO reviewDTO) {
        if ( reviewDTO == null ) {
            return null;
        }

        Review review = new Review();

        review.setReviewComment( reviewDTO.reviewComment() );
        review.setValoration( reviewDTO.valoration() );

        return review;
    }
}
