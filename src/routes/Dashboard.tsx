import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function  Dashboard(){
    return (
        <Container fluid>
            <h1 className = "text-light text-center">   Coming soon  </h1>
            <Card text = "light" className="text-center bg-dark">
        <Card.Body>
            <Tabs
                defaultActiveKey="servers"
                id="dashboard-tabs"
                justify
                variant="tabs"
                >
                <Tab className="dashboard-tab-content" eventKey="servers" title="Servers">
                    <br/>Server list
                    <p><br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh nisl, mollis at neque sed, pulvinar iaculis quam. Nulla consectetur eu felis sagittis congue. Donec vestibulum faucibus aliquet. Sed fringilla nibh eget sollicitudin molestie. Morbi placerat in velit vitae gravida. Praesent nec aliquam lectus. Nam vitae tempor urna. Donec mollis tortor in mauris interdum blandit. Suspendisse eleifend sem odio, sit amet lobortis orci pharetra vel. Aenean sagittis urna eu neque feugiat, at dapibus tellus imperdiet. In luctus placerat leo a dictum. Donec aliquam leo sed nisi scelerisque ultricies. Phasellus sed ultricies purus. Donec nunc sem, imperdiet nec neque nec, sagittis elementum neque. Aliquam bibendum purus ac pulvinar ultrices.
                    Morbi eget nisi quis mauris ullamcorper aliquet varius nec ante. In porta egestas lectus, non pellentesque magna semper dignissim. Etiam sed quam consectetur, rutrum ipsum ac, scelerisque urna. Aenean gravida feugiat risus, ut consectetur massa facilisis eu. Quisque aliquet lorem non felis volutpat, vitae tincidunt quam dictum. Maecenas imperdiet molestie tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla finibus euismod pulvinar. Duis a malesuada urna. Sed lacus nisi, auctor in nunc ac, pharetra ornare dui.
                    Donec eu vehicula mi, non luctus massa. Praesent feugiat vestibulum nunc in hendrerit. Morbi sed diam sit amet sem elementum tincidunt. Mauris posuere suscipit est, vel ultrices risus. Suspendisse accumsan id ligula sit amet bibendum. Integer semper lacinia venenatis. Duis a dictum risus. Praesent nec blandit arcu. In blandit tincidunt urna volutpat placerat. Suspendisse maximus urna sed posuere lobortis. Mauris posuere fringilla ipsum, ut mattis nisl viverra id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam vestibulum porta justo. Curabitur nec dolor est. Integer eget ante condimentum, sollicitudin purus sit amet, eleifend lectus. Phasellus ante sapien, facilisis id purus non, placerat vehicula leo. Mauris quis feugiat sem, id hendrerit lectus. Quisque faucibus urna in pharetra congue. Morbi placerat tellus lacus, in pharetra ex aliquet ut. Nam a orci ex. Morbi consectetur orci vitae tempor mollis. Mauris a ultricies eros, ut fringilla tellus. Aenean luctus id ante vitae eleifend. Duis tincidunt volutpat dolor, eget malesuada mauris pharetra sit amet. Aliquam vitae lacus faucibus, posuere tortor nec, tristique turpis. Suspendisse lobortis sem vel vulputate porttitor. Fusce a massa semper, mattis ipsum et, porta nisi. Donec malesuada libero vitae ipsum volutpat posuere. 
                    </p>
                </Tab>
                <Tab className="dashboard-tab-content" eventKey="settings" title="Settings">
                   <br/>Bot settings
                    <p><br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh nisl, mollis at neque sed, pulvinar iaculis quam. Nulla consectetur eu felis sagittis congue. Donec vestibulum faucibus aliquet. Sed fringilla nibh eget sollicitudin molestie. Morbi placerat in velit vitae gravida. Praesent nec aliquam lectus. Nam vitae tempor urna. Donec mollis tortor in mauris interdum blandit. Suspendisse eleifend sem odio, sit amet lobortis orci pharetra vel. Aenean sagittis urna eu neque feugiat, at dapibus tellus imperdiet. In luctus placerat leo a dictum. Donec aliquam leo sed nisi scelerisque ultricies. Phasellus sed ultricies purus. Donec nunc sem, imperdiet nec neque nec, sagittis elementum neque. Aliquam bibendum purus ac pulvinar ultrices.
                    Morbi eget nisi quis mauris ullamcorper aliquet varius nec ante. In porta egestas lectus, non pellentesque magna semper dignissim. Etiam sed quam consectetur, rutrum ipsum ac, scelerisque urna. Aenean gravida feugiat risus, ut consectetur massa facilisis eu. Quisque aliquet lorem non felis volutpat, vitae tincidunt quam dictum. Maecenas imperdiet molestie tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla finibus euismod pulvinar. Duis a malesuada urna. Sed lacus nisi, auctor in nunc ac, pharetra ornare dui.
                    Donec eu vehicula mi, non luctus massa. Praesent feugiat vestibulum nunc in hendrerit. Morbi sed diam sit amet sem elementum tincidunt. Mauris posuere suscipit est, vel ultrices risus. Suspendisse accumsan id ligula sit amet bibendum. Integer semper lacinia venenatis. Duis a dictum risus. Praesent nec blandit arcu. In blandit tincidunt urna volutpat placerat. Suspendisse maximus urna sed posuere lobortis. Mauris posuere fringilla ipsum, ut mattis nisl viverra id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam vestibulum porta justo. Curabitur nec dolor est. Integer eget ante condimentum, sollicitudin purus sit amet, eleifend lectus. Phasellus ante sapien, facilisis id purus non, placerat vehicula leo. Mauris quis feugiat sem, id hendrerit lectus. Quisque faucibus urna in pharetra congue. Morbi placerat tellus lacus, in pharetra ex aliquet ut. Nam a orci ex. Morbi consectetur orci vitae tempor mollis. Mauris a ultricies eros, ut fringilla tellus. Aenean luctus id ante vitae eleifend. Duis tincidunt volutpat dolor, eget malesuada mauris pharetra sit amet. Aliquam vitae lacus faucibus, posuere tortor nec, tristique turpis. Suspendisse lobortis sem vel vulputate porttitor. Fusce a massa semper, mattis ipsum et, porta nisi. Donec malesuada libero vitae ipsum volutpat posuere. 
                    </p>
                </Tab>
                <Tab className="dashboard-tab-content" eventKey="subscription" title="Subscription">
                    <br/>Subscription management
                    <p><br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh nisl, mollis at neque sed, pulvinar iaculis quam. Nulla consectetur eu felis sagittis congue. Donec vestibulum faucibus aliquet. Sed fringilla nibh eget sollicitudin molestie. Morbi placerat in velit vitae gravida. Praesent nec aliquam lectus. Nam vitae tempor urna. Donec mollis tortor in mauris interdum blandit. Suspendisse eleifend sem odio, sit amet lobortis orci pharetra vel. Aenean sagittis urna eu neque feugiat, at dapibus tellus imperdiet. In luctus placerat leo a dictum. Donec aliquam leo sed nisi scelerisque ultricies. Phasellus sed ultricies purus. Donec nunc sem, imperdiet nec neque nec, sagittis elementum neque. Aliquam bibendum purus ac pulvinar ultrices.
                    Morbi eget nisi quis mauris ullamcorper aliquet varius nec ante. In porta egestas lectus, non pellentesque magna semper dignissim. Etiam sed quam consectetur, rutrum ipsum ac, scelerisque urna. Aenean gravida feugiat risus, ut consectetur massa facilisis eu. Quisque aliquet lorem non felis volutpat, vitae tincidunt quam dictum. Maecenas imperdiet molestie tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla finibus euismod pulvinar. Duis a malesuada urna. Sed lacus nisi, auctor in nunc ac, pharetra ornare dui.
                    Donec eu vehicula mi, non luctus massa. Praesent feugiat vestibulum nunc in hendrerit. Morbi sed diam sit amet sem elementum tincidunt. Mauris posuere suscipit est, vel ultrices risus. Suspendisse accumsan id ligula sit amet bibendum. Integer semper lacinia venenatis. Duis a dictum risus. Praesent nec blandit arcu. In blandit tincidunt urna volutpat placerat. Suspendisse maximus urna sed posuere lobortis. Mauris posuere fringilla ipsum, ut mattis nisl viverra id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam vestibulum porta justo. Curabitur nec dolor est. Integer eget ante condimentum, sollicitudin purus sit amet, eleifend lectus. Phasellus ante sapien, facilisis id purus non, placerat vehicula leo. Mauris quis feugiat sem, id hendrerit lectus. Quisque faucibus urna in pharetra congue. Morbi placerat tellus lacus, in pharetra ex aliquet ut. Nam a orci ex. Morbi consectetur orci vitae tempor mollis. Mauris a ultricies eros, ut fringilla tellus. Aenean luctus id ante vitae eleifend. Duis tincidunt volutpat dolor, eget malesuada mauris pharetra sit amet. Aliquam vitae lacus faucibus, posuere tortor nec, tristique turpis. Suspendisse lobortis sem vel vulputate porttitor. Fusce a massa semper, mattis ipsum et, porta nisi. Donec malesuada libero vitae ipsum volutpat posuere. 
                    </p>
                </Tab>
            </Tabs>
      </Card.Body>
    </Card>
        </Container>

    )
}
export default Dashboard
