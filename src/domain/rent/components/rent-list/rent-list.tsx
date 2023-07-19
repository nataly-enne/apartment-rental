import { Row, Col, Card, Icon, Button } from "react-materialize";
import { useQuery } from "react-query";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faShower,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";
import {
  ActionContainer,
  CardImage,
  CardTitle,
  Description,
  Informations,
  InformationsContent,
} from "./rent-list.styles";
import SearchBar from "@domain/rent/components/search-bar/index";

const RentList: React.FC = () => {
  const getProperties = async () => {
    const response = await axios.get("http://localhost:5099/properties");
    return response.data;
  };

  const { data: properties } = useQuery("properties", getProperties);

  return (
    <>
      <SearchBar />
      {properties?.map((property: any) => {
        return (
        <Row key={property.id}>
          <Col s={2}></Col>
          <Col s={8}>
            <Card
              actions={[
                <ActionContainer>
                  <div>
                    <p>Aluguel de R$ {property.price}</p>
                  </div>
                  <div>
                    <Button
                      className="blue accent-3"
                      node="button"
                      waves="light"
                    >
                      Mensagem
                      <Icon right>message</Icon>
                    </Button>
                  </div>
                </ActionContainer>,
              ]}
              closeIcon={<Icon>close</Icon>}
              header={
                <CardImage src="https://resizedimgs.zapimoveis.com.br/fit-in/1600x720/named.images.sp/cc7e0e061bea446871499895a868f508/apartamento-com-3-quartos-para-alugar-55m-no-ponta-negra-natal.jpg" />
              }
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
              <div>
                <div>
                  <CardTitle>{property.neighborhood}, {property.city}</CardTitle>
                  <p>
                    {property.address} - {property.neighborhood}, {property.city} - {property.uf}
                  </p>
                </div>
                <Description>
                {property.description}
                </Description>
                <Informations>
                  <InformationsContent>
                    <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                    <span>
                    {property.floorSize}m<sup>2</sup>
                    </span>
                  </InformationsContent>
                  <InformationsContent>
                    <FontAwesomeIcon icon={faBed} />
                    <span>{property.bedroom}</span>
                  </InformationsContent>
                  <InformationsContent>
                    <FontAwesomeIcon icon={faShower} />
                    <span>{property.bathroom}</span>
                  </InformationsContent>
                </Informations>
              </div>
            </Card>
          </Col>
        </Row>
      )})}
    </>
  );
};

export default RentList;
