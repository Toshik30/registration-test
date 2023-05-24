import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import AuthService from '../../services/AuthServices';


interface StoreState {
  user: any;
  isAuth: boolean;
  isLoading: boolean;
  myObject: any,
}

const initialState: StoreState = {
  user: {} as any,
  isAuth: false,
  isLoading: false,
  myObject: {},
};

export const login = createAsyncThunk(
  'store/login',
  async (credentials: { email: string; password: string }, thunkAPI) => {
   
    try {
      const response = await AuthService.login(credentials.email, credentials.password);
      localStorage.setItem('token', response.data.accessToken);
      thunkAPI.dispatch(setAuth(true));
      thunkAPI.dispatch(setUser(response.data.user));
    } catch (e:any) {
      console.log(e.response.data.message);
      throw e.response.data.message;
    }
  }
);

export const registration = createAsyncThunk(
  'store/registration',
  async (credentials: { email: string; password: string, firstName: string, secondName: string, thirtyName: string,birthday: string,sex: string, phone: string }, thunkAPI) => {
    try {
      const response = await AuthService.registration(credentials.email, credentials.password, credentials.firstName,credentials.secondName, credentials.thirtyName,credentials.birthday,credentials.sex, credentials.phone);
      localStorage.setItem('token', response.data.accessToken);
      thunkAPI.dispatch(setAuth(true));
      thunkAPI.dispatch(setUser(response.data.user));
     
    } catch (e:any) {
      console.log(e.response.data.message);
      throw e.response.data.message;
    }
  }
);

export const logout = createAsyncThunk(
  'store/logout', 
  async (_, thunkAPI) => {
    await AuthService.logout();
    localStorage.removeItem('token');
    thunkAPI.dispatch(setAuth(false));
    thunkAPI.dispatch(setUser({} as IUser));
});


const saveObjectToLocalStorage = (object:Object) => {
  const serializedObject = JSON.stringify(object);
  localStorage.setItem('myObject', serializedObject);
  
}

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      console.log(action.payload);
      saveObjectToLocalStorage(action.payload)
    },
    checkAuth(state) {
      const token = localStorage.getItem('token');
      const isAuthenticated = !!token;
      state.isAuth = isAuthenticated;
      
    },
  },
  extraReducers:(builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(login.fulfilled, (state) => {
     
      state.isLoading = false;
      
    })
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
    })
  },
});

export const { setAuth, setUser,checkAuth } = storeSlice.actions;

export default storeSlice.reducer;
