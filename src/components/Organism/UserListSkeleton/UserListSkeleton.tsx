import React from 'react'
import LoaderSkeleton, { Circle } from 'react-content-loader/native'
import { Rect } from 'react-native-svg'
import { DEVICE_WIDTH } from '../../../styles/dimentions'

interface UserListSkeletonProps {
    width?: number
    height?: number
}

export const UserListSkeleton = ({
    width = DEVICE_WIDTH,
    height = 60,
}: UserListSkeletonProps) => {
    return (
        <LoaderSkeleton
            speed={0.5}
            backgroundColor="#f5f5f5"
            foregroundColor="#f2f2f2"
            viewBox={`0 0 ${width} ${height}`}
            width={width}
            height={height}
        >
            <Rect x={0} y={10} width={300} height={16} />
            <Circle y={5} x={310} cx="16" cy="16" r="16" />
            <Circle y={5} x={350} cx="16" cy="16" r="16" />
        </LoaderSkeleton>
    )
}
