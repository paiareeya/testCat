import './Cat.css';

function Cat(props) {
    const { Cats } = props;
    return (
        <div className='image-cat'>
            <img src={Cats.thumbnaiUrl} />
            <h4>{Cats.title}</h4>
        </div>

    );
}

export default Cat;