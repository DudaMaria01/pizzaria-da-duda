import MenuFuncionario from '../MenuFuncionario/MenuFuncionario'
const ListarProduto = () => {

    const arrayProdutos = [
        {
            id: 1,
            nome: "Pizza de Mussarela",
            precoVenda: 55.00,
            descricao: "Pizza de queijo mussarela com tomates, azeitonas e oregano"
        },
    
    
        {
         id: 2,
         nome: "Pizza de Frango",
         precoVenda: 60.00,
         descricao: "Pizza de frango defumado com catupiry"
        },

        {
            id: 3,
            nome: "Pizza de Brócolis",
            precoVenda: 48.00,
            descricao: "Pizza de brócolis com queijo e pedaços de bacon por cima para finalizar"
        },

        {
            id:4,
            nome: "Pizza de Banana",
            precoVenda: 50.00,
            descricao: "Pizza de Bananas em rodelas com doce de leite e canela"
            
        }

    ]
    

    return (

        <div className='container'>

            <MenuFuncionario/>

            <p>Lista de Produtos</p>

        </div>
    )
}

export default ListarProduto