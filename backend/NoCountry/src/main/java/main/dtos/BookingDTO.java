package main.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import main.enums.TypeOfPet;
import main.enums.TypeOfService;

import java.math.BigDecimal;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingDTO {

    private Long bookingId;

    @NotNull
    private Long petSitterId;

    @NotNull
    private Long ownerId;

    private Long reviewId;

    @NotNull
    private Date startDate;

    @NotNull
    private Date endDate;

    private BigDecimal price;

    private String petQuantity;

    @NotNull
    private TypeOfPet typeOfPet;

    @NotNull
    private TypeOfService typeOfService;
}
