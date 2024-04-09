import styled from 'styled-components';
import { IconButton } from '@/components/UI/Buttons';
import { MapContainer } from 'react-leaflet';
import { pxToRem } from '@/styles/_common';

export const MapStyled = {
  Map: styled(MapContainer)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;

    .leaflet-bar {
      border: none;
      right: ${pxToRem(40)};
      bottom: ${pxToRem(85)};
      margin: 0;
      box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.15);

      a {
        line-height: 1.7;
        width: ${pxToRem(40)};
        height: ${pxToRem(40)};
      }
    }

    .leaflet-control-zoom-in,
    .leaflet-control-zoom-out {
      border: none;
      border-bottom: ${pxToRem(1)} solid var(--white-color-primary);
      background-color: var(--primary-color);
      transition: all 0.3s;
      color: var(--light-grey-color-variant-1);

      &:hover {
        background-color: var(--dark-purple-color);
        color: var(--white-color-primary);
      }
    }

    .leaflet-control-zoom-in {
      border-top-left-radius: ${pxToRem(2)};
      border-top-right-radius: ${pxToRem(2)};
    }

    .leaflet-control-zoom-out {
      border-bottom-left-radius: ${pxToRem(2)};
      border-bottom-right-radius: ${pxToRem(2)};
    }

    .location-marker {
      position: absolute;
      top: ${pxToRem(-20)};
      width: ${pxToRem(36)} !important;
      height: ${pxToRem(52)} !important;
    }
    .device-marker {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      svg {
        position: absolute;
        border: 3px solid transparent;
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
      &:hover {
        svg {
          border: 3px solid var(--white-color-primary);
        }
      }
    }

    .leaflet-popup-tip-container,
    .leaflet-popup-close-button {
      display: none;
    }

    .leaflet-popup-content-wrapper {
      background-color: var(--gray-700);
      color: var(--white-color-primary);
      padding: ${pxToRem(15)};
    }
  `,

  UserLocationButton: styled(IconButton)`
    position: absolute;
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    right: ${pxToRem(40)};
    bottom: ${pxToRem(40)};
    z-index: 800;
    transition: all 0.3s;
    box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.15);
    color: var(--light-grey-color-variant-1);

    &:hover {
      color: var(--white-color-primary);
    }
  `,
  ErrorMessage: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
      padding-bottom: ${pxToRem(2)};
      font-family: var(--font-primary);
      font-size: var(--text-2xl);
      border-bottom: ${pxToRem(2)} solid var(--primary-color);
    }
  `,
};
