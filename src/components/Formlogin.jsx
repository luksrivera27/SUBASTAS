import React from 'react'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
export function Formlogin() {
    return (
        <div class="container ">
          <Form class="col-auto bg-dangerp-5 text-center">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Correo electronico" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            
                <Form.Control type="password" placeholder="Contraseña" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recordar" />
                <a className="ancla" href={""}>¿olvidaste tu contraseña?</a> 
            </Form.Group>
        
        <Button variant="primary" type="submit">
            Iniciar Sesion
        </Button>
        </Form> 
        </div> 
    
        
      
    )
}