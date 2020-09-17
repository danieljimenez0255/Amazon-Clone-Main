import React from "react";
import "../Styling/Home.css";
import Product from "./Product";
import { Flipper, Flipped } from "react-flip-toolkit";

const Home = ({ cAniState }) => {
  return (
    <Flipper flipKey={cAniState}>
      <div className="home">
        <div className="home__container">
          <Flipped flipId="homeImg" stagger="home-img">
            <img
              className={cAniState ? "home__image" : "home__imageStart"}
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
            />
          </Flipped>
          <div className="home__row">
            <Product
              title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
              price={49.99}
              image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg "
              rating={5}
              index={Math.random() * 100}
            />
            <Product
              title="Fire TV Stick 4K streaming device with Alexa built in, Dolby Vision, includes Alexa Voice Remote, latest release"
              price={49.99}
              image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBISEA8QEBASEhYQEBAQDxYOEA8QFRIWFhURFRcYHSggGR0lGxUVITEhJSkrLjAuFx8zODMtNygtLisBCgoKDgwKGg8PGjUaHyUtLSs1NS0rKy01LS8tKys1NjctLzUtLS0rNTQrLSsrKystLS0tKys3Ky0tLSsrLSsrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABLEAACAQMABAkHBwkGBwEAAAAAAQIDBBEFEiExBgcTIkFRYXGzMjNzdIGRsRQjQlJyocE0Q0RigoOjstFjZJKTwuElU1RVovDxFv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAA0LhXxq2NjUlRjCrdV4PVnCikqcJLfGdSTwn2JM0a+46L+b+Ytbaguh1HO4ljuTijnt43KdRt5br1m297bqyJuidEQrQpTq3DpO4qSo28I03UTnGdOGJYa25qZx1Rb7ANgqcZemJ77yMOynb0or/yi395bjw50q99/X9ipr4QNX1GpSi8ZhJxbTynjtPbik505Ri8N7nnGNoG5W/DrSkd19Vf2oUp/zQMvZcZOko41p0aq6eUoJP303H4GiUVsRMoptpJZb2JdLYHVNGcaSeFc2jS+vQmp47XCer9zZvWh9L0LunylCopxzqy2OMoS6Yyi9sXtWxnz6oSjJxknGSeHF7Gn1HSOJ3fffao/yT/29wLXSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHyNdeVU9PW8SR7aXdeipxo16tKFTy4QliLbTTkup4bWepi6XOqenreKyzFgXaUUtiL3KpbOnpwt3eW6ZmuLyFKV9Q+URjVpLWlUpzSfKzaa1Unsck3nD6IvuAiUZJ7ujensaJdNkOvFRrzUXFx5Sai4vMdTLaSfSlzUS6YEuEm3ltt9Lby2+s6TxN7777dH+SRzSkzpXE1vvvt0fDkB0sAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8j3nlVPWK3issxL995dT1iv4siLOqoJylu+9vqQEmBXTWrLWhVlSn1wlh9/WjA1tIVJeS9SPUt5l+D/CHkeZWb1c5jNb12PsAn26WW9Zzk98pPLZOgZOx0tb19j5OquppN/1Rdu9CrGvb5eNrot5eP7N9PcwMfSOmcTO+++3R8ORzGjJPatzOm8S/wCneko+HIDpgAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5Iv/Lq+sV/FZr97Wcpb+bHYvxZntKPEq3rFfxJGu0KevKMfryjH3vAEm1sJTw29WL2p9LW7K9uTL0NH0orzafbLnMu1FicktijJwiuqMXqxXuRXAC1PRdN4cPmpryZQ6H3GwcFtNT13QrbKsdql/zI/WRi4Fq6nqVbeqt6qKm+2MtmANp05bKFSNSKxGrnKW6NVb/8S2+xm98Su6+9JS8ORp2ledbPO+M4SXv1fgzceJXdfekpeGwOmgAAAAAAAAAAAAAAAAAAAAAAAAAAAAPkfSkefWX94rr+LI1unNwkmt8JJ+1PJs2lPO1vWa/jSMFf0MPWS2Pf2MDYLzHKOa8it8/T+zUes498ZNxfceQMZojSsIQ5GvGUqOs5QnDztvJ75QzvTwsx9u8ztCx5RZoV6NePWp8lP9qEtqYFMCjk+WuKNNbVCXK1P1UlzV3kyOiq7WE4Qf1m+Ux24X9TJ6N0fTt4vbmT51SpLfJ9Mn2dgErStTFFR6ZzXsUec39y96N54lN196Wl4bOaXFzys9b6KWrBPfjpk+/8EdL4k/JvvS0vDYHTQAAAAAAAAAAAAAAAAAAAAAAAAAAAAHyTpXzlb1mv40iGl7ewmaX85WfVdV8/50iAp9Laj2b/AGN9YEavo7O2m8fqvd7GRnY1V+bl3ozMer4dKLlBym8QTedkUoucpY3tJdAEXQ8rqlLmR5r3qcub/sZ91Zz8tprfqR8nPW8+UQaMnsTec5w+1dDLsaknLVpxy1vxFzecZwkviBPgzqPEl5N96Wl4RyanOcZatSLi3uzFwa6tj6O06zxJeTfemp+EB04AAAAAAAAAAAAAAAAAAAAAAAAAAAAB8kaajmdwv71X8WRc0Pp6dCOqpVXDXVTkY3Lt6eutj5SKT101hY2LBTpfztf1qv40jHxWduFjo1t7AvcprSckkllvEVqxTk90V1LoJOidI/J1Ug02qkVBuFTkKqUZqScKiTaTxhrc/YiKup7H/wC7iqMs7Ek8dMt2ezrAn3d87itKrqqOtLWer5McR1Us/SfW+kWN67atyjhGaedVT8h6y2pvrLVKXQ9j6MbvYVuth4STfTnZFZ3LtfYBJub93VZTUIQSUdbk1iCUXld7bwdb4kfIvvTU/CORUK+Wk0l1Y2ruOucSHkX3pqfhAdOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfJGnU3UuUv8AqrhfxZF3RV/aQguWsflMuVjPX+Uzpa1FZ1rfVS5udnO7MFGmPPXPrlx4rMdqLq+/HwAkVJxlOTisQ1pOMc51IuWY089OF0l7RdxShCrGrQ5acoKFJ8q6XyeopZlV2eXlfRewjQXUetJvydZrq2Y72BOua9OdROlT5KKSzDW18NRw3ntb+490fcwp1ZOrRjcRan81KbpqWvHEamY7ea8buosUUlsSx043e3tL7hGXlJPqz0ASLq6p1akOSoRoJRgpQhJzUnHyq0s7nLG5LG063xHebvvT0/CRyO3io7IxSXYdb4jvN33p6fgoDp4AAAAAAAAAAAAAAAAAAAAAAAAAAAAD5K0x5659cuPFZBRO015+69cuPFZAAriTuDioOrSVxKUabeZYjGUW+nXcpLC7V2EGJTbPmx7gJbccrUc3H6LqRUZ4cduUm0tvaSIEXO7v/BkiAEmB1riN81fenh4KORwZ1ziM81fesQ8GIHTwAAAAAAAAAAAAAAAAAAAAAELTd26FtXqxScqdKdSKe5uMW1n3Hz5W4wtL1ds7xJPbqwpKkkn0c3D+8D6QB8zx4WXy/PN/vaq/1Emnw40hHdVl7Lif4gfR4PnunxjaRX5yo/3ql/NElUuNC/i1l1X/AJUv9IGi6a8/deu3Hisx5fr3Dq8pUe+pXqzfRtlNt9nSWQPUV6PpRkkpVadLCW2optS7FqRkyhHmpjamlnoays9nUBKqJKWFJTSeycVJRlzd6Ukn70i7BkakunOX9yXUiTACRA65xF+avvWIeDE5DBnSuKLTtC0heRrOWZ14TWrHW2ckl+AHZAa/HhjZv6c1305F6PCqyf59LvhJfgBmgYqPCOzf6TT9r1fiXo6atHuuqHdy0M/ECeCxSvKUmlGrTk3uUZpt+xMvgAAAAAAAAAAAAAGJ4WfkF36vV8Nny/RfNXcj6g4WfkF36vV8Nny7RfNXcgLp6UZPUwK8nh5k8yBApebfpJ/EHlHzb9JP4noHqZkNC6JlcQqVdZRjTTcnyc6ssqnOcYpRWIpqDTlJrf07jHo9oynTeacnHKcebJwerLZKOVvTW9ATb6ynb1OTqamvhN8nLXhiUcrnLY3/APHt3UxZGo08dS6ktiXWSIgSIMiXq+de/dHc2ujsJUGRL1/OPuQFVKUuidRd1Wa/En0a9Rbq9wv38/xZj6JLpgZCF7XW65r+2efiim60rcxitW4qbXjLUdmzoaWSzFkXSk1GEW3ha2/2MDZ+KqcpaatZTqTqScayzUk5Y+Zk9ie7cfRR8+8Uejq0tIULpQTt6SqKpPXjmOvRnGPNzna2d1u9KUaMJVKtRU6cNspzeIxTeNr72BNAAAAAAAAAAAAAYnhb+QXfq9Xw2fLdF81dx9ScLfyC79Xq+Gz5Zo+Su5AXcnpRk9yBXkpyeZPMgQ6Hm36SfxKimh5t+kn8T0CoqRQVIC7Fl2JZiXYsC9AiXvnH3L4EqDIl6/nH3ICqkyXTZDpkqmwJMWY/hD5n9r8GTYsgaffzP7S+AHUuJqGaNXvh8DNcZ8P+E3fdDZ+9gYjiTWaVb9j+Vmf404Y0Td90F/FiBunBerKdlaynJylKhTcpPe24LLZlDEcEfyC09XpfyIy4AAAAAAAAAAAY3hJRdSzuYLGZUKkVl4WXB4PkmlpCCSUsppYa7T610tHXi4b4vZJPc11M1a44LWk/LtKEu+lH+gHzwr6n9ZFyN1Tf04+87lW4A6OlvsqPsjq/AgVuLDRkv0dx+zOS/EDj6qxf0l7ypNdaOn1uKTR78nl4d02/iQ58TlBvm3deHfFSA5jb+bfpJfE9fYXattyLq0s55KvUpa3TJQm45+4tAUKtjyk49+1PuZdhNda954IpLcl7gL1OLe5N9xK1I6ss+UlvU9bbnc1u6yKpvr2FUQL0CLeecfciRAgaSuYwqvOdqTAv0yTTMZT0hT62vYSad9S+ugMjFkbSlHlKernGZLb7Ge07qH14+8qq1E0sNb8/cwNy4otK3FK6jaU6dCbuFLnVJTiocnCUuhPOUmdP4WcHby/tKtq421LldVOrGtOeoozjJ8101nOGt5yjimaembbbtUaz3f2Ml+J9FgWrWhGnCMIJKMIqEUtySWEi6AAAAAAAAAAAAFmrTyWXbomHmAITtkUu1RPweaoGOdqimFslJd5knAt1KLYHypwjoSp3t7CcXCavK0tWWx6sqjcZdzWGmYw+lOFnAijpBJ1qMJ1IrEKqbp1Yx+rrxabXY8nNNLcUF1Ft27k10Rk4ywu/YwOboqRs1fi60vD9EnNfqrJH/wDwul/+31/8DAwaLkTYrbi60vP9ElD7awZyx4oL+eOVqKC6VHCfdtyBojmlvaS629hu3AiyU6NSVSjGUZ1E6bqQy5RUUm1lbsm36H4p6VFqUoqc1ulUbqNd2di9xt9rwZhHe8sDSI8FbSpvs6L/AHaXwKnxcaOnvtIr7LcTo9LRsY7kXvky6gOUVeKbR0t0KsH+rVeCKuKK0Uswr3MO6UXldW47A7ZdR58lXUBpvBbgja2M1OhS+d3ctOTqVGunazfac8pEaFsl0EmnHAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4jyQAHjAAHjAAArQAHoAAAAAAAP/9k="
              rating={4}
              index={Math.random() * 100}
            />
          </div>

          <div className="home__row">
            <Product
              title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray "
              price={2099.0}
              image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
              rating={5}
              index={Math.random() * 100}
            />
            <Product
              title="Soft Skills: The software developer's life manual 1st Edition by John Sonmez"
              price={30.0}
              image="https://images-na.ssl-images-amazon.com/images/I/51WiLueukSL._SX396_BO1,204,203,200_.jpg"
              rating={4}
              index={Math.random() * 100}
            />
            <Product
              title="Schecter 6 String SYNYSTER GATES CUSTOM-S, Satin Gold Burst (1743)"
              price={1299.0}
              image="https://images-na.ssl-images-amazon.com/images/I/71Q5rGJiySL._AC_SX569_.jpg"
              rating={5}
              index={Math.random() * 100}
            />
          </div>

          <div className="home__row">
            {" "}
            <Product
              title="Avatar The Last Airbender Stickers 50PCSVariety Vinyl Waterproof Car Sticker Motorcycle Bicycle Luggage Decal Graffiti Patches Skateboard Stickers for Laptop Stickers (Avatar The Last Airbender)"
              price={5.99}
              image="https://images-na.ssl-images-amazon.com/images/I/81zYUnAE6gL._AC_SX466_.jpg"
              rating={4}
              index={Math.random() * 100}
            />
          </div>
        </div>
      </div>
    </Flipper>
  );
};

export default Home;
