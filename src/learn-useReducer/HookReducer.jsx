import React, { useReducer } from 'react'
import styled from 'styled-components'

const initialState = 0

const reducer = (state, action) => {
    switch (action){
        case 'tambah': return state + 1
        case 'kurang' : return state - 1
        default:
            return state
    }
}
const Container = styled.div`
background-color: #134535;
border-radius: 50px;
box-shadow: 0px 10px 10px -10px rgba(0,0,0,0.75);
color: #000;
position: relative;
width: 30%;
margin: auto;
margin-top: 10px;
`
const Button = styled.button
`
 color: #eddb3b;
 height: 50px;
 width: 70px;
 border:none;
 border:solid 2px white;
 border-radius: 5px;
 &:hover {
  border:solid 2px black;
  cursor: pointer;
 }
 background: rgba(255, 255, 255,0);
 font-size: 18px;
 margin: 10px 20px;
 background-color: #eddb3b; color: black;
`
const Img = styled.img`
 border: 2px solid #fffefa;
 border-radius: 20%;
 padding: 5px;
 width: 60%;
 margin: 50px;

`
const Col = styled.div
  `
 display: table-cell;
 text-align: center;
 font-family: poppins;
 font-size: 18px;
 color: #fffefa;
`

const Row = styled.div
  `
 display: table;
 padding:  0.5em 0.5em;
 width: 100%;
 table-layout: fixed;
 border-spacing: 2px;
`

function HookReducer() {

    const[count, dispatch] = useReducer(reducer, initialState)
    return (
            <Row>
                <Col>
                    <p>Tugas RSBK Modul 4 Kelompok 24</p>
                    <Container>
                        <Img top width="100%" src="https://user-images.githubusercontent.com/38358167/100195200-93840700-2f29-11eb-8a87-7f4998c25a8d.jpg" alt="Card image cap" />
                    </Container>
                    <p>Mac and Cheese Cube by Pottarium</p>
                    <p>Spesial Kemerdekaan</p>
                    <p></p>
                    <p>Stok Barang</p>
                    <Row>
                        <Col>
                            <Button onClick={() => dispatch('tambah')}>+</Button>
                        </Col>
                        <Col>
                            {count}
                        </Col>
                        <Col> 
                            <Button onClick={() => dispatch('kurang')}>-</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
    )
}

export default HookReducer