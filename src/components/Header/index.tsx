import { Link, useNavigate } from "react-router-dom";
import { MainHead, HeadContent, Input, InputArea } from "./style";
import { doLogoout, } from "../../helpers/auth";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  showInput: boolean;
}

export const Header = (props: Props) => {
  const logged = localStorage.getItem("token");
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('')

  const handleLoggout = () => {
    doLogoout();
    navigate("/");
  };
  
  const getValue = () => {
    location.href= `/category?q=${inputValue}`
    window.onload
    if(inputValue === '') {
      toast.error('Digite o que está procurando!', {
        position: "top-center",
        duration: 2000,
        style: {
          background: 'red',
          color: '#fff'
        }
      });
    }
  }
  return (
    <MainHead>
      <Toaster />
    <HeadContent>
      <div className="areaHead">
        <div>
          <Link to="/">
            <h1>MARKETPLACE</h1>
          </Link>
        </div>
        {logged && (
          <div className="AreaProfile">
            <Link to="/account">
              <p>Minha conta</p>
            </Link>
            <p onClick={handleLoggout}>Sair</p>
            <Link to="/newad">
              <p className="adsButton">Anunciar</p>
            </Link>
          </div>
        )}
        {!logged && (
          <div className="AreaProfile">
            <Link to="/login">
              <p>Login</p>
            </Link>
            <Link to="/signup">
              <p onClick={handleLoggout}>Cadastrar</p>
            </Link>
            <Link to="/newad">
              <p className="adsButton">Anunciar</p>
            </Link>
          </div>
        )}
      </div>
      <InputArea show={props.showInput}>
         <Input placeholder="Estou procurando por..." onChange={e => setInputValue(e.target.value)}></Input>
        <div onClick={getValue}>Buscar</div>
      </InputArea>
      </HeadContent>
  </MainHead>
  );
};
