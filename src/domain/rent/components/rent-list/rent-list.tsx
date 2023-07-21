import axios from "axios";

import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
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
  ChipsContainer,
} from "./rent-list.styles";
import SearchBar from "@domain/rent/components/search-bar/index";
import Chip from "@domain/rent/components/chips";

const RentList: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get("city") ?? "";
  const type = searchParams.get("type") ?? "";

  const [searchText, setSearchText] = useState<string>("");
  const [filters, setFilters] = useState({
    city,
    type,
    searchText,
  });

  const getProperties = async () => {
    const url = `http://localhost:5099/properties?city=${city}&type=${type}&searchText=${searchText}`;
    const response = await axios.get(url);
    return response.data;
  };

  const { data: properties, refetch } = useQuery(
    ["properties", searchText, city, type], 
    () => getProperties()
  );

  const handleRemoveFilter = (filterName: string) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      [filterName]: "",
    }));

    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(filterName);
    navigate(`${location.pathname}?${searchParams.toString()}`);

    refetch();
  };

  const whatsappLink =
    "https://wa.me/+5584998277184?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20imóvel.";

  return (
    <>
      <SearchBar onChange={(e) => setSearchText(e.target.value)} />
      <ChipsContainer>
        {filters.city && (
          <Chip tagName={city} onClick={() => handleRemoveFilter("city")} />
        )}
        {filters.type && (
          <Chip tagName={type === 'apt' ? 'apartamento' : type} onClick={() => handleRemoveFilter("type")} />
        )}
        {filters.searchText && (
          <Chip tagName={searchText} onClick={() => handleRemoveFilter("searchText")} />
        )}
      </ChipsContainer>
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
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className="blue accent-3"
                          node="a"
                          waves="light"
                        >
                          Mensagem
                          <Icon right>message</Icon>
                        </Button>
                      </a>
                    </div>
                  </ActionContainer>,
                ]}
                closeIcon={<Icon>close</Icon>}
                header={<CardImage src={property.banner} />}
                horizontal
                revealIcon={<Icon>more_vert</Icon>}
              >
                <div>
                  <div>
                    <CardTitle>
                      {property.neighborhood}, {property.city}
                    </CardTitle>
                    <p>
                      {property.address} - {property.neighborhood},{" "}
                      {property.city} - {property.uf}
                    </p>
                  </div>
                  <Description>{property.description}</Description>
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
        );
      })}
    </>
  );
};

export default RentList;
