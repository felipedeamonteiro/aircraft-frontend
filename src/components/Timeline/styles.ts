import styled from 'styled-components';

interface IItemsProps {
  width: number;
  status: string;
}

export const Dates = styled.div`
    display: flex;
    flex: 1 100%;
    flex-flow: wrap;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 20px 0 10px;
`;

export const Slider = styled.div`
    display: flex;
    flex: 1 100%;
    flex-flow: wrap;
    flex-wrap: nowrap;
    font-weight: 500;
    word-break: break-all;
    text-align: center;
    margin-bottom: 10px;
`;

export const getColor = (status: string) => {
    let color = '#ccc'
    if (status === "scheduled") {
        color = "#65A871"
    } else if (status === "turnaround") {
        color = "#B397E8"
    }

    return color;
};

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props: IItemsProps) => getColor(props.status)};
    width: ${(props: IItemsProps) => props.width}%;
    padding: 10px 0;
`;

export const TimelineWrapper = styled.div`
    flex: 1 100%;
    margin: 0 5px 30px;
`;

export const TotalPercentage = styled.span`
    font-weight: 900;
`;
