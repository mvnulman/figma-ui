import styled from "styled-components";
import { Battery1 } from "@styled-icons/fluentui-system-regular/Battery1";
import { Wifi } from "@styled-icons/boxicons-regular/Wifi";
import { CellularData1 } from "@styled-icons/fluentui-system-filled/CellularData1";

export const HeaderIconsContainer = styled.div`
  background: #7929ff;
  width: 100%;
  height: 250px;
  border-radius: 0 0 200px 200px;
  color: #fff;
  display: flex;
  justify-content: first baseline;
  font-size: 13px;
  font-weight: bold;

  p {
    margin: 18px 45px;
  }
`;

export const NetworkIcon = styled(CellularData1)`
  color: ${({ color }) => color};
  width: 22px;
  height: 22px;
  margin-left: 180px;
  margin-top: 12px;
`;

export const WifiIcon = styled(Wifi)`
  color: ${({ color }) => color};
  width: 22px;
  height: 22px;
  margin-top: 12px;
  margin-left: 10px;
`;


export const BatteryIcon = styled(Battery1)`
  color: ${({ color }) => color};
  width: 30px;
  height: 26px;
  margin-top: 12px;
  margin-left: 5px;
`;
