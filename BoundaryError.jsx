import React from "react"
import { Accordion, Button, Container, Image } from "react-bootstrap"
import ReactLogo from "../../assets/img/logo_pleelo.png"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError")
    return { hasError: true, error: error }
  }

  componentDidCatch(error, info) {

  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Fallback error={this.state.error} />
    }

    return this.props.children
  }
}

const Fallback = ({ error }) => {
  console.log(error.stack)
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <div
        className="d-flex flex-column w-100 justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Image
          className="loader-element animate__animated animate__jackInTheBox"
          src={ReactLogo}
          height={40}
        />
        <h1>Ha ocurrido un error en la aplicacion</h1>
        <p>
          Cierre sesion y vuelva a iniciar. Si el error persiste, contacte al
          administrador
        </p>

        <div className="d-flex gap-2 mt-4">
          <Button
            onClick={() => {
              //TEMPORAL
              window.location.reload()
            }}
          >
            Recargar
          </Button>
          <Button
            onClick={() => {
              //TEMPORAL
              window.location.replace("http://localhost:3001/signin")
            }}
            className="btn-danger"
          >
            Cerrar Sesion
          </Button>
        </div>
      </div>
      <span>Error details</span>
      <Accordion
        flush
        // defaultActiveKey="0"
        className="mt-2 mb-4"
        style={{ width: "100%" }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>{error.message} </Accordion.Header>
          <Accordion.Body>
            <code>{error.stack}</code>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default ErrorBoundary
