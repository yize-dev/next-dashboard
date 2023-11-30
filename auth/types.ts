export interface AmplifyContextType{
  loading: boolean
  authenticated: boolean
  method: string
}

// ActionMapType
export type ActionMapType<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined ? { type: Key } : { type: Key; payload: M[Key] };
  };
  
  // AuthStateType
export type AuthStateType = {
    user: AuthUserType | null;
    loading: boolean;
  };
  
  // AuthUserType (根据代码中的 user 对象属性推断)
export type AuthUserType = {
    id: string;
    displayName: string;
    role: string;
    // 其他属性...
  } | null;