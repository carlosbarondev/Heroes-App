import { MemoryRouter, Routes, Route } from "react-router-dom";
import { mount } from "enzyme";

import { LoginScreen } from "../../../components/login/LoginScreen";
import { AuthContext } from "../../../auth/authContext";
import { types } from '../../../types/types';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Pruebas en <LoginScreen />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('debe hacer match con el snapshot ', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login Screen');

    })

    test('debe realizar el dispatch y la navegacion ', () => {

        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.login, payload: { name: 'Carlos' } });

        expect(mockNavigate).toHaveBeenCalledWith('/marvel', { replace: true });

        localStorage.setItem('lastPath', '/dc');

        wrapper.find('button').prop('onClick')();

        expect(mockNavigate).toHaveBeenCalledWith('/dc', { replace: true });

    })


})
