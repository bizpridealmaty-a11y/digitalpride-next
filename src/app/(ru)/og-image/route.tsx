import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const contentType = 'image/png';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Digital Pride';
    const subtitle = searchParams.get('subtitle') || 'Маркетинговое агентство в Алматы';

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#0a0a0a',
                    color: '#ffffff',
                    padding: '80px',
                    position: 'relative',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Glow accents */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-200px',
                        right: '-200px',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(239,68,68,0.45) 0%, transparent 70%)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-200px',
                        left: '-150px',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(249,115,22,0.35) 0%, transparent 70%)',
                    }}
                />

                {/* Top brand */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        marginBottom: 'auto',
                        zIndex: 2,
                    }}
                >
                    <div
                        style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '14px',
                            background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '32px',
                            fontWeight: 900,
                            color: '#fff',
                        }}
                    >
                        DP
                    </div>
                    <div
                        style={{
                            fontSize: '28px',
                            fontWeight: 800,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                        }}
                    >
                        Digital Pride
                    </div>
                </div>

                {/* Main */}
                <div style={{ display: 'flex', flexDirection: 'column', zIndex: 2 }}>
                    <div
                        style={{
                            fontSize: '72px',
                            fontWeight: 900,
                            lineHeight: 1.05,
                            letterSpacing: '-2px',
                            marginBottom: '24px',
                            maxWidth: '950px',
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            fontSize: '32px',
                            fontWeight: 500,
                            color: '#a1a1aa',
                            maxWidth: '900px',
                            lineHeight: 1.3,
                        }}
                    >
                        {subtitle}
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    style={{
                        marginTop: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: '1px solid #27272a',
                        paddingTop: '24px',
                        fontSize: '20px',
                        color: '#71717a',
                        zIndex: 2,
                    }}
                >
                    <div>digitalpride.kz</div>
                    <div style={{ color: '#ef4444', fontWeight: 700 }}>+7 707 035 7777</div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
