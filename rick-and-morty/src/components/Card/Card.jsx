import { CardContainer } from './styles';

const Card = ({ id, img, name, species, removeCharacter, changePage }) => (
    <CardContainer>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <p>{species}</p>
        <div className='btn'>
            <button onClick={() => changePage('detailsPage', id)}>Detalhes</button>
            <button onClick={() => removeCharacter(id)}>Remover</button>
        </div>
    </CardContainer>
);

export default Card;
