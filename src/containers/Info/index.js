import React, { useEffect, useState } from "react";
import { Episodes } from "../../components";
import { InfoTop } from "../../components/Info";
import { Container, ContainerNoPadding } from "../../styles/shared";
import { Dropdown } from "../../components/Shared";
import { DropdownContainer } from "./info.styles";

const InfoContainer = ({ data, providers }) => {
  const [selectedProvider, setSelectedProvider] = useState(null);

  const bannedProviders = ["enime", "crunchyroll", "bilibili", "enime"];
  const providerData = providers?.map((item) => ({
    label: item.name,
    value: item.name,
    image: item.logo,
  }));

  // remove banned providers
  providerData.forEach((item, index) => {
    if (bannedProviders.includes(item.value.toLowerCase())) {
      providerData.splice(index, 1);
    }
  });

  //sort providers and put gogoanime first
  providerData.sort((a, b) => {
    if (a.value.toLowerCase() === "gogoanime") return -1;
    if (b.value.toLowerCase() === "gogoanime") return 1;
    return 0;
  });

  const onSelect = (item) => {
    localStorage.setItem("provider", item?.value || "gogoanime");
  };

  const checkLocalStorage = () => {
    const provider = localStorage.getItem("provider");
    if (provider) {
      const selectedProviderLS = providerData.find(
        (item) => item.value === provider
      );
      if (providerData) {
        setSelectedProvider(selectedProviderLS);
      }
    }
  };

  useEffect(() => {
    checkLocalStorage();
  }, []);

  return (
    <div>
      <InfoTop {...data} />
      <ContainerNoPadding>
        <DropdownContainer>
          <Dropdown
            data={providerData}
            onSelect={onSelect}
            selected={selectedProvider}
            setSelected={setSelectedProvider}
          />
        </DropdownContainer>
        <Episodes {...data} />
      </ContainerNoPadding>
    </div>
  );
};

export default InfoContainer;
