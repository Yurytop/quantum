
// Изначально хотел сделать тип для данных, полностью повторяющий иходны пример.
// Пришлось отказаться из-за ошибки совместимости с компонентом Material UI (Требуется более глубокое изучение компонента)

export interface Entity {
    "id": number | null | undefined,
    "planName": string | null | undefined,
    "active": boolean | null | undefined,
    "planBeginTs": string | null | undefined,
    "planEndTs": string | null | undefined,
    "planDate": string | null | undefined,
    "restrictionId": number | null | undefined,
    "username": string | null | undefined,
    "parentPlanId": number | null | undefined,
    "planType": string | null | undefined,
    "scheduled": boolean | null | undefined,
    "frozenOrdersAmount": number | null | undefined,
    "requestedAmount": number | null | undefined,
    "openAmount": number | null | undefined,
    "experimental": string | null | undefined
}

export interface Sort {
    "empty": false | null | undefined,
    "sorted": true | null | undefined,
    "unsorted": false | null | undefined
}
export interface Pageable {
    "sort": Sort,
    "offset": number | null | undefined,
    "pageSize": number | null | undefined,
    "pageNumber": number | null | undefined,
    "paged": boolean | null | undefined,
    "unpaged": boolean | null | undefined,
}

export interface Pageable {
    "sort": Sort,
    "offset": number | null | undefined,
    "pageSize": number | null | undefined,
    "pageNumber": number | null | undefined,
    "paged": boolean | null | undefined,
    "unpaged": boolean | null | undefined,
}

export interface ApiTest1 {
    "content": Entity[],
    "pageable": Pageable,
    "last": boolean | null | undefined,
    "totalPages": number | null | undefined,
    "totalElements": number | null | undefined,
    "size": number | null | undefined,
    "number": number | null | undefined,
    "sort": Sort,
    "first": boolean | null | undefined,
    "numberOfElements": number | null | undefined,
    "empty": boolean | null | undefined
}
export interface ApiTest {
    "content": Entity[]
}