import React from 'react';
import { Col, Row, Grid } from 'react-flexbox-grid';
import { Img, Title } from '../../styles/global';
import { Container, ContainerInformation, ContainerCloseBar, ContainerImagePokemon, ContainerTitle } from './styles';
import PokemonInformation from '../pokemon-information';
import PokemonEvolution from '../pokemon-evolution';

const urlPokemonImage = process.env.REACT_APP_POKEMON_IMAGE;

export default ({ showModal, toggleModal, pokemon, updatePokemonModal }) => {
    // @TODO Colocar imagem fisicamente no projeto
    const closePicture = 'https://cdn3.iconfinder.com/data/icons/interface/100/close_button_2-512.png';

    let mainPicture = '';
    let name = '';
    let number = '';

    // @TODO Refatorar
    if (showModal && pokemon.data && pokemon.data.id) {
        mainPicture = `${urlPokemonImage}${pokemon.data.id.toString().padStart(3, '0')}.png`;
        name = pokemon.data.species.name.charAt(0).toUpperCase() + pokemon.data.species.name.slice(1);
        number = pokemon.data.id.toString().padStart(3, '0');
    };

    const closeModal = async () => {
        await updatePokemonModal({});
        toggleModal(false);
    };

    return (
        <Container showModalInformation={showModal}>
            <ContainerInformation>
                <ContainerCloseBar>
                    <Img size='small' src={closePicture} onClick={() => closeModal()} />
                </ContainerCloseBar>
                <Grid fluid>
                    <ContainerTitle>
                        <Title>{name} - {number}</Title>
                    </ContainerTitle>
                    <Row>
                        <Col xs={5}>
                            <ContainerImagePokemon>
                                <Img size='large' src={mainPicture} />
                            </ContainerImagePokemon>
                        </Col>
                        <Col xs={7} >
                            <PokemonInformation data={pokemon.data} />
                        </Col>
                    </Row>
                    <PokemonEvolution evolutions={pokemon.evolutions} />
                </Grid>
            </ContainerInformation>
        </Container >
    )
}