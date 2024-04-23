package com.ecommerce.serverr.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CupomDTO {
    private Integer cupomId;
    private boolean isTroca;
    private Double valor;
}
