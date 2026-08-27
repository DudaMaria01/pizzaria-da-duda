import MenuFuncionario from "../MenuFuncionario/MenuFuncionario";
import CredentialUser from "../../components/CredentialUser";
 
const ListarCategoria = () => {
  /*const arrayProdutos = [
    {
      id: 1,
      nome: "Pizza de Calabresa",
      categoria: "Tradicional",
      precoVenda: 54.9,
    },
    {
      id: 2,
      nome: "Pizza de Frango com Catupiry",
      categoria: "Especial",
      precoVenda: 49.9,
    },
    {
      id: 3,
      nome: "Pizza Portuguesa",
      categoria: "Tradicional",
      precoVenda: 52.9,
    },
    {
      id: 4,
      nome: "Pizza Mussarela",
      categoria: "Tradicional",
      precoVenda: 44.9,
    },
    {
      id: 5,
      nome: "Pizza Quatro Queijos",
      categoria: "Especial",
      precoVenda: 53.9,
    },
    {
      id: 6,
      nome: "Pizza Marguerita",
      categoria: "Tradicional",
      precoVenda: 47.9,
    },
    {
      id: 7,
      nome: "Chocolate com Morango",
      categoria: "Doce",
      precoVenda: 69.9,
    },
  ];*/
 
  return (
    <div className="container">
      <MenuFuncionario />
   <CredentialUser title="Lista de Categorias"/>

    <p>Listar Categorias do Produto</p>
      
      </div>
      )
    
    }
  
 
export default ListarCategoria;