'use client'

export default function ErrorTrack ({error}: {error: Error}) {
    return (
        <h1 style={{padding: 100}}>{error.message}</h1>
    )
}