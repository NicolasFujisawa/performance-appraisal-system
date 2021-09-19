export type CriteriasResponse = CriteriaResponse[]

export interface CriteriaResponse {
  criteriaId: number
  name: string
  methodId: number
  criteriaScores: CriteriaScoreResponse[]
}

export interface CriteriaScoreResponse {
  criteriaScoreId: number
  name: string
  value: number
  criteria: {
    criteriaId: number
    name: string
  }
}
