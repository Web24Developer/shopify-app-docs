import {
    Page,
    Layout,
    Card,
    TextField,
    Button,
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function SocialMediaLinkGenerator() {
    const [facebookLink, setFacebookLink] = useState("");
    const [instagramLink, setInstagramLink] = useState("");
    const [twitterLink, setTwitterLink] = useState("");
    const [qrCodeValue, setQrCodeValue] = useState("");

    const handleFacebookChange = useCallback((value) => {
        setFacebookLink(value);
    }, []);

    const handleInstagramChange = useCallback((value) => {
        setInstagramLink(value);
    }, []);

    const handleTwitterChange = useCallback((value) => {
        setTwitterLink(value);
    }, []);

    const generateQRCode = useCallback(() => {
        // Combine all links into a single string
        const combinedLinks = `
            Facebook: ${facebookLink}
            Instagram: ${instagramLink}
            Twitter: ${twitterLink}
        `;
        setQrCodeValue(combinedLinks);
    }, [facebookLink, instagramLink, twitterLink]);

    return (
        <Page title="Social Media QR Code Generator">
            <Layout>
                <Layout.Section>
                    <Card sectioned>
                        <TextField
                            label="Facebook Link"
                            value={facebookLink}
                            onChange={handleFacebookChange}
                            placeholder="Enter Facebook profile URL"
                        />
                        <TextField
                            label="Instagram Link"
                            value={instagramLink}
                            onChange={handleInstagramChange}
                            placeholder="Enter Instagram profile URL"
                        />
                        <TextField
                            label="Twitter Link"
                            value={twitterLink}
                            onChange={handleTwitterChange}
                            placeholder="Enter Twitter profile URL"
                        />
                        <Button primary onClick={generateQRCode}>
                            Generate QR Code
                        </Button>
                        {qrCodeValue && (
                            <div style={{ marginTop: "20px", textAlign: "center" }}>
                                <QRCodeCanvas
                                    value={qrCodeValue}
                                    size={256}
                                    bgColor="#FFFFFF"
                                    fgColor="#000000"
                                    level="H"
                                />
                            </div>
                        )}
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    );
}
