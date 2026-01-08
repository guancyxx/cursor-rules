// Types template - Single domain type definitions
// Each domain has its own types file

// Domain entity types
export interface DomainEntity {
  id: string
  // Define domain entity properties
}

// API request types
export namespace DomainRequestTypes {
  export interface GetDataParams {
    // Define request parameters
  }

  export interface CreateDataParams {
    // Define request parameters
  }
}

// API response types
export namespace DomainResponseTypes {
  export interface GetDataResponse {
    // Define response data structure
  }

  export interface CreateDataResponse {
    // Define response data structure
  }
}

// Store state types
export interface DomainState {
  data: DomainEntity[]
  loading: boolean
  error: string | null
}

// Component types
export interface ComponentProps {
  // Define component props
}

export interface ComponentData {
  // Define component data
}

