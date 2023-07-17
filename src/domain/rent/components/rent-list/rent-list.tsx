import { Row, Col, Card, Icon, Button } from "react-materialize";
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

const RentList: React.FC = () => {
  return (
    <>
      <Row>
        <Col s={2}></Col>
        <Col s={8}>
          <Card
            actions={[
              <ActionContainer>
                <div>
                  <p>Aluguel de R$ 3.700</p>
                </div>
                <div>
                  <Button className="blue accent-3" node="button" waves="light">
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
                <CardTitle>Ponta Negra, Natal</CardTitle>
                <p>
                  Rua Doutor Manoel Augusto Bezerra de Araújo, 4894 - Ponta
                  Negra, Natal - RN
                </p>
              </div>
              <Description>
                ⏰ Não perca esta oportunidade 📞 Entre em contato e agende a
                sua visita Ronaldo Sobral - Creci 6087
              </Description>
              <Informations>
                <InformationsContent>
                  <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                  <span>
                    55m<sup>2</sup>
                  </span>
                </InformationsContent>
                <InformationsContent>
                  <FontAwesomeIcon icon={faBed} />
                  <span>2</span>
                </InformationsContent>
                <InformationsContent>
                  <FontAwesomeIcon icon={faShower} />
                  <span>2</span>
                </InformationsContent>
              </Informations>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default RentList;
