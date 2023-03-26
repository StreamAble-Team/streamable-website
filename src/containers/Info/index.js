import React, { useEffect, useState } from "react";
import { Episodes } from "../../components";
import { InfoTop } from "../../components/Info";
import { Container, ContainerNoPadding } from "../../styles/shared";
import { Dropdown } from "../../components/Shared";
import { DropdownContainer } from "./info.styles";
import { useRouter } from "next/router";

const InfoContainer = ({ data, providers }) => {
  const navigation = useRouter();
  const [selectedProvider, setSelectedProvider] = useState(null);

  const allowedProviders = ["gogoanime", "9anime", "zoro"];
  // map providers to dropdown data and filter out providers that are not allowed
  const providerData = providers
    .map((provider) => ({
      value: provider.name,
      label: provider.name,
      image: provider.logo,
    }))
    .filter((provider) =>
      allowedProviders.includes(provider.value.toLowerCase())
    );

  //sort providers and put gogoanime first
  providerData.sort((a, b) => {
    if (a.value.toLowerCase() === "gogoanime") return -1;
    if (b.value.toLowerCase() === "gogoanime") return 1;
    return 0;
  });

  const onSelect = async (item) => {
    const providerLS = localStorage.getItem("provider");
    await localStorage.setItem("provider", item?.value || "gogoanime");
    // add provider to url and dub dont change if it is already there
    if (providerLS !== item?.value) {
      navigation.push(
        `/info/${data?.id}?provider=${item?.value || "gogoanime"}&dub=${
          navigation?.query?.dub || "false"
        }`
      );
    }
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
        {data?.episodes ? <Episodes {...data} /> : null}
      </ContainerNoPadding>
    </div>
  );
};

export default InfoContainer;
