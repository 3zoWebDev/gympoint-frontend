import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import Notifications from '~/components/Notifications';
import logo from '~/assets/logo-header.png';

import { Container, Content, Profile, Menu } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Header({ history }) {
  console.tron.log('History: ', history);
  const profile = useSelector(state => state.user.profile);
  const dispacth = useDispatch();

  function handleSignOut() {
    dispacth(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Gympoint" />
          </Link>

          <ul>
            <li>
              <Menu activeStyle={{ color: 'black' }} to="/alunos">
                ALUNOS
              </Menu>
            </li>
            <li>
              <Menu activeStyle={{ color: 'black' }} to="/planos">
                PLANOS
              </Menu>
            </li>
            <li>
              <Menu activeStyle={{ color: 'black' }} to="/matriculas">
                MATRÍCULAS
              </Menu>
            </li>
            <li>
              <Menu activeStyle={{ color: 'black' }} to="/help">
                PEDIDOS DE AUXÍLIO
              </Menu>
            </li>
          </ul>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <span onClick={handleSignOut}>sair do sistema</span>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}