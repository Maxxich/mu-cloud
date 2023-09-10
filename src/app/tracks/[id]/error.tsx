'use client'

export default function ErrorTrack ({ error }: {error: Error}) {
    return (
        <h1>{error.message}</h1>
    )
}