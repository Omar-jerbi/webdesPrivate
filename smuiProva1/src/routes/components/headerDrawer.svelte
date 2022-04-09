<div class="drawer-container">
  <!-- Don't include fixed={false} if this is a page wide drawer.
        It adds a style for absolute positioning. -->
  <Drawer variant="modal" fixed={false} bind:open>
    <Header>
      <Title>Super Mail</Title>
      <Subtitle>It's the best fake mail app drawer.</Subtitle>
    </Header>

    <Content>
      <List>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive('Inbox')}
          activated={active === 'Inbox'}
        >
          <Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
          <Text>Inbox</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive('Star')}
          activated={active === 'Star'}
        >
          <Graphic class="material-icons" aria-hidden="true">star</Graphic>
          <Text>Star</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive('Sent Mail')}
          activated={active === 'Sent Mail'}
        >
          <Graphic class="material-icons" aria-hidden="true">send</Graphic>
          <Text>Sent Mail</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive('Drafts')}
          activated={active === 'Drafts'}
        >
          <Graphic class="material-icons" aria-hidden="true">drafts</Graphic>
          <Text>Drafts</Text>
        </Item>

        <Separator />
        <Subheader component={H6}>Labels</Subheader>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive('Family')}
          activated={active === 'Family'}
        >
          <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
          <Text>Family</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive('Friends')}
          activated={active === 'Friends'}
        >
          <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
          <Text>Friends</Text>
        </Item>
        <Item
          href="javascript:void(0)"
          on:click={() => setActive('Work')}
          activated={active === 'Work'}
        >
          <Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
          <Text>Work</Text>
        </Item>
      </List>
    </Content>
  </Drawer>

  <!-- Don't include fixed={false} if this is a page wide drawer.
        It adds a style for absolute positioning. -->
  <Scrim fixed={false} />
  <AppContent class="app-content">
    <main class="main-content">
      <nav class="topNav">
        <Button on:click={() => (open = !open)} ripple={false}>
          <BurgerButton></BurgerButton>
        </Button>
        
        <div class="quick-menus">
          <h3>OPT1</h3>
          <h3>OPT2</h3>
          <h3>OPT3</h3>
        </div>

      </nav>

      <br />

      <div style="height: 20px;">&nbsp;</div>
      <div>BOTTOM.</div> 

      <p style="height: 80vh;">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae debitis nam ex ipsum fugit, deserunt, repellat amet, perferendis culpa minus sapiente veritatis consequatur nesciunt impedit sunt eligendi delectus? Consequatur, tempora!
        Ipsa enim consequatur at, possimus doloremque doloribus! Neque non labore eius aliquid minus molestias. Iste recusandae, aliquam dolorum qui repellat quae odio repellendus cumque beatae ut nobis, in fugiat quos?
        Hic iste incidunt placeat, sequi commodi eaque esse nisi, doloribus, porro explicabo dignissimos corporis eum aliquid? Provident, repellendus error, harum amet corporis quaerat distinctio molestias recusandae aliquid blanditiis rerum delectus.
        Non quae corrupti sunt ullam assumenda. Exercitationem quis delectus autem asperiores velit blanditiis nobis quo obcaecati tempora necessitatibus, placeat architecto odio assumenda, porro at praesentium incidunt distinctio. Fugiat, sequi tempore!
        Maxime unde debitis, porro pariatur dignissimos nulla saepe ut, distinctio dolor id quod iure minus vitae atque neque quis! Alias provident tempora vel rem harum nesciunt, nobis voluptates similique itaque.
        Pariatur alias ullam natus nesciunt aliquid perspiciatis suscipit quis labore eligendi animi, dolorum esse tempore obcaecati debitis dolores sed. Doloribus odio minima veritatis dolorum ullam nihil sit beatae earum molestias.
        Aliquid quaerat officia amet ut suscipit voluptas magni, tempore, aliquam eos dolorem deleniti excepturi eum esse atque nesciunt explicabo! Laudantium quam repellat culpa voluptatibus incidunt odit quos pariatur in temporibus.
        Repudiandae modi perspiciatis suscipit obcaecati sunt quia laudantium voluptatum aliquam! Fugiat asperiores, consequatur delectus temporibus voluptates dolor nesciunt hic dolore facere consectetur perspiciatis quasi veritatis! Sequi ex harum aperiam assumenda.
        Nesciunt porro libero nobis incidunt facilis ab perspiciatis aliquam, hic dicta sequi ea alias, quos provident voluptatem adipisci voluptate eum fuga maiores nemo iure aut officiis. Excepturi commodi id quisquam.
        Voluptatem beatae doloribus quae quos inventore minus omnis laudantium dolorem sint neque ipsam, odio obcaecati maiores, assumenda dignissimos, accusamus sunt id! Odit voluptatibus, eius numquam veniam quasi alias adipisci ut.
        Debitis dolorem et fuga repellendus, laudantium placeat in ab eos quasi hic dicta molestiae, accusantium vero natus voluptatibus harum! Corporis rem numquam aperiam dolor! Optio numquam nisi sit nihil doloremque!
        Voluptatum impedit perspiciatis ut quia consequuntur rem ipsam laudantium id, eveniet quibusdam recusandae animi nesciunt sunt maxime eius alias quod, vitae ducimus adipisci beatae quam aut. Aliquid similique aperiam nulla?
        Similique culpa laudantium quisquam rerum dolorem repellendus dolores, quidem mollitia quas voluptatem consectetur consequatur est quasi quia, pariatur neque sed, libero laborum necessitatibus ut rem. Saepe odit pariatur harum repudiandae.
        Doloremque nulla numquam asperiores obcaecati animi delectus odit atque laudantium distinctio quo ea id recusandae iste nesciunt inventore labore modi, officiis explicabo neque nihil. Provident nam ad distinctio quasi voluptate?
        Temporibus et, pariatur rem adipisci officiis eveniet exercitationem blanditiis, quam suscipit aut maiores nemo nihil asperiores, ratione autem hic maxime quas iusto id. Sint at aliquam ex illo, excepturi commodi!
        Placeat corrupti fuga minus tempore ex labore distinctio repellendus sapiente inventore qui voluptas, eligendi dolor dignissimos asperiores ut praesentium expedita animi harum? Repellendus minima expedita libero id fugiat non incidunt.
        Non aliquid consequatur cumque ullam distinctio. Laudantium porro at inventore eum iusto facere mollitia dicta sint in, corrupti vel itaque odio qui! Velit dolorem obcaecati fuga quae a nihil hic.
        Repellendus assumenda vitae asperiores voluptatem. Voluptate quia omnis odit expedita, sequi labore iure amet officiis hic distinctio odio nisi corrupti quas sint aut. Repudiandae vero adipisci repellat illum ut veniam?
        Autem maiores voluptate ipsum dignissimos. Dicta repudiandae voluptatem quis, quod in vero sit sed reiciendis, ipsam praesentium consequatur porro. Eveniet, molestiae ullam in natus omnis atque aperiam distinctio! Voluptatum, recusandae!
        Nam corrupti nulla libero pariatur! Quam iste autem ab vero minus accusamus nam nulla ducimus id sed deleniti quisquam, sint molestias distinctio voluptas unde dolorem eveniet repellendus perferendis veritatis expedita.
        Libero exercitationem aut quia numquam nihil odit ea nesciunt, eum, perspiciatis voluptatibus iusto non saepe voluptatem omnis doloribus. Magnam modi, tempore voluptas dolore alias debitis quod ut dolores quae at.
        Culpa, debitis mollitia corporis suscipit libero fugit! Animi incidunt maxime nemo, magnam atque harum doloremque quas, aperiam tempora voluptate nobis quam necessitatibus. Magni asperiores quisquam expedita accusamus a itaque animi.
        Quasi ea facilis, nihil ad optio maxime, aut, numquam molestias incidunt dicta nostrum deleniti recusandae esse voluptatem? Natus libero, ullam quaerat adipisci magni temporibus, laudantium, voluptatum reprehenderit quae atque eum!
        Ea dignissimos aliquid ab, nulla vel libero perferendis nemo tempora molestiae neque eveniet inventore, et, suscipit corrupti molestias necessitatibus temporibus culpa. Provident beatae dolor voluptates veniam repellendus. Ab, facilis distinctio.
        Minus ipsam laboriosam laudantium vitae rem alias distinctio impedit. Sed ipsam nam nesciunt veritatis voluptatibus suscipit, eligendi incidunt ducimus quo esse beatae exercitationem ratione repudiandae quibusdam. Aperiam voluptate ex voluptatibus!
        Molestias sunt nihil iure doloribus, itaque, delectus laboriosam veniam dicta enim autem voluptatum magnam officia laudantium dolor earum. Corporis esse eos impedit suscipit aut rerum accusamus neque sapiente tempore architecto!
        Numquam magni accusamus fugit temporibus consectetur? Recusandae sapiente placeat ratione, tempore eum temporibus ipsa repellendus, quos cupiditate quaerat iure totam voluptates maxime asperiores ipsum, consectetur alias praesentium. Eaque, quos eveniet.
        Voluptas omnis itaque nulla, officia nobis numquam necessitatibus harum rem veniam dolorem cumque voluptatum, nisi accusantium exercitationem blanditiis cupiditate! Placeat accusantium repudiandae magnam voluptatum error, velit quis sed voluptates veniam!
        Recusandae non, sit, minus dolore quod libero eum eos id illo optio qui. Debitis accusantium, consequatur alias suscipit numquam ullam, dolore nemo, in obcaecati quisquam explicabo molestiae asperiores minima maxime?
        Ipsa quam, deleniti sint amet quis, quisquam consequuntur animi, blanditiis officia aut velit enim ducimus assumenda quibusdam facere nobis veritatis totam a. Ipsum eum expedita accusamus maiores animi, laboriosam quis.
        Eligendi, praesentium natus maiores unde veniam quam libero nobis, rerum eaque excepturi deserunt, id veritatis expedita. Molestiae dolorem debitis itaque excepturi at corporis, sapiente sed sint recusandae temporibus velit consectetur.
        Dicta optio aperiam repellat neque laborum! Cumque dicta tempora atque doloremque voluptatibus voluptatem itaque eos, provident, aspernatur sunt non accusamus dignissimos recusandae aliquam fugit. Ducimus doloribus molestias doloremque id voluptatum?
        Cupiditate recusandae officia quaerat accusamus voluptatum eaque quidem aliquid incidunt sapiente explicabo nam perferendis ipsum animi enim tempore ullam, doloribus voluptatem, dolore odio in a rerum consequatur commodi vel? Obcaecati!
        Sapiente impedit corrupti cumque doloribus temporibus provident assumenda, blanditiis voluptatum incidunt inventore qui labore. Ullam, unde amet ratione voluptatibus nobis suscipit ad voluptatum corporis ipsa magni, aut adipisci sequi quisquam?
        Vitae esse quo, voluptatum necessitatibus, unde explicabo iste doloremque magni ipsa nesciunt aspernatur. Saepe, recusandae deserunt. Sint fugit numquam ab nostrum mollitia animi culpa, inventore reiciendis voluptates sapiente minima soluta?
        Nostrum corporis in inventore reprehenderit magnam, debitis doloribus culpa voluptatum magni. Dignissimos est natus repellendus molestiae expedita perspiciatis quo, corrupti quos fugiat obcaecati neque optio sunt explicabo modi perferendis doloribus.
        Quam unde voluptate voluptates omnis incidunt dolor quasi perferendis deleniti fuga facere, similique doloribus nesciunt esse, minus consectetur? Fugit maiores quidem reprehenderit quos illum. Laboriosam suscipit delectus autem dolor assumenda?
        Cumque, inventore. Harum ipsa tempore quae accusamus consequuntur quo distinctio perspiciatis voluptate porro omnis neque vel eaque error ipsum quaerat iste dicta, autem in hic repudiandae dolore. Necessitatibus, sit ullam.
        Nesciunt, nobis fugiat, molestias nulla vero voluptatem, tenetur nihil cupiditate possimus ratione aspernatur voluptate suscipit quas consectetur saepe praesentium cum. Obcaecati possimus eum sint exercitationem vel nostrum. Voluptatum, voluptates mollitia?
        Expedita non pariatur vitae ab recusandae magni molestiae amet facere. Sunt ut atque temporibus delectus sit. Nam autem impedit labore, tempore deleniti accusamus quae? Quisquam cum ipsum reprehenderit aspernatur temporibus.
      </p>

    </main>
  </AppContent>
</div>

<script lang="ts">
	import BurgerButton from './burgerButton.svelte';
  import Drawer, {
    AppContent,
    Content,
    Header,
    Title,
    Subtitle,
    Scrim,
  } from '@smui/drawer';
  import Button, { Label } from '@smui/button';
  import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
  import { H6 } from '@smui/common/elements';

  let open = false;
  let active = 'Inbox';

  function setActive(value: string) {
    active = value;
    open = false;
  }
</script>

<style lang="scss">
  /* These classes are only needed because the
    drawer is in a container on the page. */
  .drawer-container {
    position: relative;
    display: flex;
    height: 100vh;
    max-width: 100vw;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    overflow: hidden;
    z-index: 0;
  }

  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }

  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
  }


  .topNav{
    display: flex;
    flex-direction: row;
  }

  .quick-menus{
    display: flex;
    h3{
      margin-left: 20px;
    }
  } 


</style>
