import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';

export default function ContactUs() {
    const { loaded, error, formCreated } = useHubspotForm({
        region: "na1",
        portalId: "6731253",
        formId: "985c7e89-ad49-4f9a-b4be-e7381b58f64a", 
        target: "#hubspotFormContactUs"
    });

  return (
    <div className='contactus-page'>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Generated by suraj" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      <div className="heading">
        <div className="container">
            <h1>Get in touch</h1>
        </div>
      </div>
        <div className="container">
        <div className="clear get_tuchSection">
                <div className="container">
                    <div className="panel_section"> 
                    <div className="col-md-12 padLeft0 col-sm-10  ">
                    
                        <div className="clear">
                            <section className=" hotspotForm">
                            <div className="clear ">
                                
                                <div className="marTop20 wid50">
                                    <div id="hubspotFormContactUs"> </div> 
                                </div>
                            </div>
                        </section>
                        </div>
                    </div>
                </div> 
                </div>
            </div>
        </div> 
        <style jsx>
            {`
               .heading{
                background: #19acdf;
                color: #fff;
                margin: 10px 0px 5px;
                padding: 25px;
                }
                .heading h1{
                    font-family: Lato-Medium;
                    margin: 0px;
                }
                .get_tuchSection{
                    margin: 30px 0px;
                }
                .get_tuchSection h3{
                    font-size: 18px;
                        margin-top: 0px;
                    font-family: Lato-Bold; 
                }
                .panel_section{
                    border: 1px solid #ddd;
                    background: #fff;
                    padding: 25px 40px;
                    margin-bottom: 15px;
                    overflow: hidden;
                    border-radius: 4px;
                }
                .panel_section .col-md-1 img{
                    margin-top: 8px;
                }
            `}
        </style>
      </Layout>
    </div>
  )
}