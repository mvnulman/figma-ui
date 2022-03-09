import styled from "styled-components";
import { Battery1 } from "@styled-icons/fluentui-system-regular/Battery1";
import { Wifi } from "@styled-icons/boxicons-regular/Wifi";
import { CellularData1 } from "@styled-icons/fluentui-system-filled/CellularData1";

export const HeaderIconsContainer = styled.div`
  background: #7929ff;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: first baseline;
  font-size: 14px;

  p {
    margin: 0 50px;
  }
`;

export const NetworkIcon = styled(CellularData1)`
  color: ${({ color }) => color};
  width: 22px;
  height: 17px;
  margin-left: 180px;
`;

export const WifiIcon = styled(Wifi)`
  color: ${({ color }) => color};
  width: 22px;
  height: 17px;
`;


export const BatteryIcon = styled(Battery1)`
  color: ${({ color }) => color};
  width: 20px;
  height: 18px;
`;


